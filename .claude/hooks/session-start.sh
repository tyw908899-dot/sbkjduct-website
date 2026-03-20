#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 300000}'

SKILLS_DIR="$HOME/.claude/skills"
GSTACK_DIR="$SKILLS_DIR/gstack"

# Install bun if not available
if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
  export PATH="$HOME/.bun/bin:$PATH"
fi

# Clone or update gstack
if [ ! -d "$GSTACK_DIR" ]; then
  mkdir -p "$SKILLS_DIR"
  git clone https://github.com/garrytan/gstack.git "$GSTACK_DIR"
else
  git -C "$GSTACK_DIR" pull --ff-only 2>/dev/null || true
fi

# Build gstack (skip Playwright browser install if it fails)
cd "$GSTACK_DIR"
BROWSE_BIN="$GSTACK_DIR/browse/dist/browse"
if [ ! -x "$BROWSE_BIN" ]; then
  bun install
  bun run build || true
fi

# Link individual skill directories
cd "$SKILLS_DIR"
for skill_dir in gstack/*/; do
  if [ -f "$skill_dir/SKILL.md" ]; then
    skill_name="$(basename "$skill_dir")"
    [ "$skill_name" = "node_modules" ] && continue
    ln -snf "gstack/$skill_name" "$skill_name" 2>/dev/null || true
  fi
done

# Ensure global gstack state directory
mkdir -p "$HOME/.gstack/projects"
