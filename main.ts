// Dad Joke Showdown — entry program (program/v1, Node 22).
//
// The brief: write one dad joke, at most 200 characters, to be read aloud.
// A judge model (a father of three who has heard every dad joke at every
// barbecue) compares entries two at a time and picks the one that earns the
// bigger groan. It weighs, in order: a joke a father would tell at the
// table; a pun that lands cleanly on the first read; freshness inside the
// dad-joke tradition; tightness, punchline at the end; natural rhythm aloud.
//
// Candidates weighed against that brief:
//   "Why did the scarecrow win an award? Because he was outstanding in
//    his field." — the pun lands, but it is the single most retold dad
//    joke there is; fails freshness outright.
//   "I only know 25 letters of the alphabet. I don't know y." — clean
//    turn, but just as worn; the judge has heard it a thousand times.
//   "My kids asked why I put the car in the oven. I said I wanted a
//    hot rod." — clean "hot rod" pun, fresh framing, good runner-up, but
//    the setup needs the listener to picture a car in an oven before the
//    turn pays off.
//   "I put my phone in airplane mode and threw it out the window. It
//    still hasn't landed." — funny image and a clean turn, but the joke
//    is about a phone, not a dad at the table; weaker on criterion 1.
//   "Why did the dad bring a ladder to the barbecue? He heard the
//    steaks were high." — fits the barbecue persona, but the
//    steaks/stakes pun is well-worn; freshness is only in the framing.
//   "My son asked if the moon ever gets tired. I said, 'No — it just
//    phases in and out.'" — clean "phases" pun, reads well aloud, but
//    the turn is gentle; the groan is small.
//   "I told my kids the ceiling fan was my biggest fan. It never
//    laughs — it just stares." — the "biggest fan" pun is known, and the
//    second sentence dilutes the punchline instead of sharpening it.
//   "Why did the dad cross the road? To get to the other side of the
//    argument." — CHOSEN.
//
// Chosen joke: "Why did the dad cross the road? To get to the other side
// of the argument." It is a dad joke about a dad, told at the table: the
// father is literally the subject. The pun turns on "the other side" —
// the oldest joke setup in the world (the chicken crossing the road),
// answered with a domestic twist every parent recognises: crossing the
// room to win an argument. That is freshness inside the tradition, not
// outside it: the judge has heard the setup a thousand times, but never
// this answer. The turn is understood on the first read with no
// explaining, every word earns its place, the punchline arrives at the
// very end, and the question-and-answer rhythm is exactly how a father
// delivers a joke across a dinner table. 73 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, exactly as it will be judged: one line, no trailing newline.
const JOKE =
  "Why did the dad cross the road? To get to the other side of the argument.";

// The harness expects the entry at this absolute path.
const OUTPUT_PATH = "/output/entry.txt";

// Guard the entry contract at runtime: the judged text must be a
// single non-empty line within the 200-character limit. Fail loudly
// instead of writing a malformed entry.
if (JOKE.length === 0) {
  throw new Error("Dad joke must not be empty.");
}
if (JOKE.length > 200) {
  throw new Error(
    `Dad joke must be at most 200 characters, got ${JOKE.length}.`,
  );
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Dad joke must be a single line without newlines.");
}

mkdirSync("/output", { recursive: true });

// Written byte-exact: the joke alone, no trailing newline, so the entry
// is exactly one line of 73 characters and nothing else.
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
