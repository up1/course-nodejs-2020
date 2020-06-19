## Setup project Node.js witht TypeScript

### 1. Install npm packages

```
$npm init -y
$npm i typescript -s
$npm i express @types/express -s

$npm i @types/node --save-dev
$npm i ts-node nodemon --save-dev
$npm i rimraf --save-dev
```

### 2. Setup typescript

```
$npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```

### 3. Create `./src/index.ts`

Run command-line to compile TypeScript to JavaScript

```
$npx tsc
```

Check output in `./build`

### 4. Config nodemon (create file `nodemon.json`)

```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```
