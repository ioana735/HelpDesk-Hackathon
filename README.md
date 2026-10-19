# HelpDesk-Hackathon

🏆 **1st Place — TEDIHT Hackathon 2026** (EDIH Transilvania, EU-cofinanced, 3-month program)  
🎤 **Presented as a poster at ACM womENcourage 2026** (Nice, France)

An AI helpdesk chatbot for public-institution employees in Romania. Staff ask procedural questions in Romanian and get answers grounded in official documents, using retrieval-augmented generation (RAG). Built for Challenge 1 (Intelligent Helpdesk) of the TEDIHT hackathon "Solutions for the digitalization of the public sector", which had 14 competing teams.

## How it works

1. **Document ingestion** – official documents are uploaded to Supabase Storage, text is extracted, split into chunks and turned into embeddings.
2. **Retrieval** – for each question, the most relevant chunks are retrieved from Supabase.
3. **Generation** – a local LLM (via Ollama) answers using only the retrieved context.
4. **Streaming** – the answer is streamed token by token to the chat UI.

## Architecture

| Part | Stack |
|---|---|
| Frontend | Next.js, TypeScript |
| API | Node.js, Express, TypeScript, auth middleware |
| AI service | Python, Ollama (local LLM), text extraction, chunking, embeddings |
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
