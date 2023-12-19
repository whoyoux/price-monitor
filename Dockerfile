FROM denoland/deno:1.39.0

EXPOSE 1993

WORKDIR /app

USER deno

COPY . .
RUN deno cache src/main.ts

CMD ["run", "--allow-net", "src/main.ts"]