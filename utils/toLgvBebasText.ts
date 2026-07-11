const GEORGIAN_TO_LGV_KEY: Record<string, string> = {
  ა: "a",
  ბ: "b",
  გ: "g",
  დ: "d",
  ე: "e",
  ვ: "v",
  ზ: "z",
  თ: "T",
  ი: "i",
  კ: "k",
  ლ: "l",
  მ: "m",
  ნ: "n",
  ო: "o",
  პ: "p",
  ჟ: "J",
  რ: "r",
  ს: "s",
  ტ: "t",
  უ: "u",
  ფ: "f",
  ქ: "q",
  ღ: "R",
  ყ: "y",
  შ: "S",
  ჩ: "C",
  ც: "c",
  ძ: "Z",
  წ: "w",
  ჭ: "W",
  ხ: "x",
  ჯ: "j",
  ჰ: "h",
};

const MTVARULI_START = 0x1c90;
const MTVARULI_END = 0x1cbf;
const MTVARULI_TO_MKHEDRULI_OFFSET = 0xbc0;

/**
 * Converts Georgian Unicode text to the Latin-key encoding expected by the
 * original (non-Unicode) LGV Bebas Neue font files.
 */
export function toLgvBebasText(value: string): string {
  return Array.from(value, (character) => {
    const codePoint = character.codePointAt(0);
    const mkhedruliCharacter =
      codePoint !== undefined &&
      codePoint >= MTVARULI_START &&
      codePoint <= MTVARULI_END
        ? String.fromCodePoint(codePoint - MTVARULI_TO_MKHEDRULI_OFFSET)
        : character;

    return GEORGIAN_TO_LGV_KEY[mkhedruliCharacter] ?? character;
  }).join("");
}
