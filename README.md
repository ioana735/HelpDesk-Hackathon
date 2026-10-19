# HelpDesk-Hackathon

🏆 **1st Place — TEDIHT Hackathon 2026** (EDIH Transilvania, EU-cofinanced, 3-month program)  
🎤 **Poster "Intelligent Helpdesk" at ACM womENcourage 2026** (Nice, France, Sep 30 – Oct 2, 2026)

An AI helpdesk chatbot for public-institution employees in Romania. Staff ask procedural questions in Romanian and get answers grounded in official documents, using retrieval-augmented generation (RAG). Built for Challenge 1 (Intelligent Helpdesk) of the TEDIHT hackathon "Solutions for the digitalization of the public sector", which had 14 competing teams.

## Why

Our survey of Romanian public institutions found that **54%** of employees lose over 30 minutes a day just searching for information, and **80%** run into frequent technical blockers. The helpdesk replaces manual searches through hundreds of pages of legislation with instant, cited answers.

## Key features

- **Answers with legal citations**: every answer is retrieved from a local database of official documents and cites the exact article, which limits hallucinations.
- **Auto-ticketing**: unresolved questions automatically open a support ticket for the relevant department.
- **100% local deployment**: the LLM and embeddings run on internal servers, so no data leaves the institution.
- **Analytics**: shows which questions employees struggle with most.

## How it works

1. **Document ingestion** – official documents are uploaded to Supabase Storage, text is extracted, split into chunks and turned into embeddings.
2. **Retrieval** – for each question, the most relevant chunks are retrieved from Supabase.
3. **Generation** – a local LLM (Gemma via Ollama) answers using only the retrieved context.
4. **Streaming** – the answer is streamed token by token to the chat UI.

## Architecture

| Part | Stack |
|---|---|
| Frontend | Next.js, TypeScript |
| API | Node.js, Express, TypeScript, auth middleware |
| AI service | Python, FastAPI, Gemma via Ollama, bge-m3 embeddings, text extraction and chunking |
| Data | Supabase (PostgreSQL, Storage) |

```
ai/
  chat_service/          # LLM calls, sync + streaming responses
  document_processing/   # extractor → chunker → embeddings pipeline
backend/                 # Express API, Supabase config, auth middleware
frontend/                # chat UI
```

## My role

I owned the **chat UI**: token-by-token streaming, typing indicators, message persistence and session history.

## Team

Team **Powerpuff** (3 members): [@leatanabela](https://github.com/leatanabela), [@iohanamranovatz](https://github.com/iohanamranovatz), [@ioana735](https://github.com/ioana735).
