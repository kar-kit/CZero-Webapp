# CZero — Webapp

Project scaffold for a team build (Team 46), November 2024. A Next.js front end and an Express API, wired together and proven to talk to each other end to end.

**Stack** — Next.js 15 (App Router) · React 19 RC · Tailwind · shadcn/ui · Express 4 · axios · nodemon

---

## What this repository actually is

The groundwork, not the product. One commit, one afternoon: a two-service layout, both halves running, and a round-trip request across the boundary to prove the wiring before anyone writes a feature.

```
frontend/   Next.js App Router, Tailwind + shadcn/ui, Geist typeface
  src/api/retrieveMessage.js   axios GET against the backend
backend/    Express API on :3333, nodemon for reload
```

The front end holds a button; pressing it calls the Express endpoint and renders the response. That's the whole thing — and it's deliberately the whole thing, because at this stage the interesting question is whether the two services, the CORS setup and the component library all work together, not what the app does.

## Running it

```bash
cd backend  && npm install && npm run dev    # :3333
cd frontend && npm install && npm run dev    # :3000
```

---

**Honest framing:** this is a starting point that didn't get built on, kept for completeness. For finished work see [SticksNBoulders](https://github.com/kar-kit/SticksNBoulders), [MemoAI](https://github.com/kar-kit/FYP26-Frontend) or [PaperFind](https://github.com/kar-kit/paperfind).
