# Caesar's Game

---
![Julius Caesar](https://github.com/mihailgaberov/ceasars-game/blob/main/caesar.jpeg)

* Enter screen that consists of the game logo and buttons PLAY, HOW TO PLAY, and ABOUT

* Level 1: A slot machine game, where the user has limited amount of virtual money which guarantees her certain amount of spins. If for example 1 spin is 1 buck, 10 spins will allow 10 spins, for which the player should win at least once in order to continue to second level. If no win is reached, the game will offer a sorry message and option for restart.

* Level 2: Simple scratch card 3x3 (9 in total) fields with numbers. If three numbers in a row, column or diagonal are revealed, their digit will be the Caesar's key for the second level. If no sequence is revealed, the player loses his money and a new game opportunity is given.

* Level 3: A key phrase to be used in the third level should be found using the Caesar's key from the first level. The key phrase will be a simple phrase containing one or two words.

* Level 4: The last level of the game. Here the players will be asked to decode a given ciphered text using the key phrase found in level 2. The phrase will be used as a key combined with a defined alphabet for successfully deciphering the encoded text.

* Level 5: Winning screen - this will be the screen that the player will see when successfully decode the ciphered text in level 4. Here will be the same text in plain English, the player results - played cards, balance, etc., and some other gamification elements.

The digits in the scratch card will be roman - from one to nine.

Think about Wheel of Luck! To add it after each level as another reward to the player, more virtual money for example, for purchasing new cards.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Testing

Run all tests

```bash
npm run test
```

Run only unit tests
```bash
npm run test:unit
```


Run only integration tests
```bash
npm run test:integration
```