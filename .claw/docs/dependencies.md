# Dependencies

This file tracks all dependencies in the project, their purpose, and how to install them.

## 1. next.js

A full stack web development framework.

Customized (inferred): TypeScript, ESLint, React Compiler, `src/` App Router, and `@/*` import alias.

```bash
pnpm create next-app@latest
```

## 2. Semantic Release & Plugins

Automates versioning, changelog generation, Git commits, and GitHub releases.

```bash
pnpm add -D semantic-release @semantic-release/changelog @semantic-release/git @semantic-release/github
```