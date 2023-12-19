FROM denoland/deno:1.39.0

EXPOSE 80

WORKDIR /app

USER deno

COPY . .
RUN deno cache src/main.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "src/main.ts"]