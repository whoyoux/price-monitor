FROM denoland/deno:1.39.0

EXPOSE 8000

WORKDIR /app

COPY . .
RUN deno cache src/main.ts

CMD ["run", "--allow-read", "--allow-write", "--allow-net", "src/main.ts"]