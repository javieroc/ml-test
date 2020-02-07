# DNA challenge

## Description

Simple express api to check if a `dna` chain belongs to a mutant or not.

### Download

Download the example:

```bash
git clone https://github.com/javieroc/ml-test.git
cd ml-test
```

## How to use

Install and run it:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Run tests:

```bash
npm run test
```

Available endpoints:

Payload to test:

```json
{
  "dna": [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
  ]
}
```

- POST: `https://rocky-ocean-07374.herokuapp.com/api/mutant`
- GET: `https://rocky-ocean-07374.herokuapp.com/api/stats`
