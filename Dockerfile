FROM node:18-slim AS base

# because of gyp ERR! Cannot find python
RUN apt update -y && apt install -y make g++ python3
RUN ln -s /usr/bin/python3 /usr/bin/python

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 8000
CMD [ "pnpm", "run", "preview" ]