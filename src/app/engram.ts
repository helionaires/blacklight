import { generateJS } from "jsr:@helionaires/engram@0.2.6";

export function engram() {
    const bytecode = [
        { opcode: 1, operand: 0b01 },
        { opcode: 3, operand: 0b01 },
        { opcode: 2, operand: 0b01 },
    ];
    const js = generateJS(bytecode, 1);
    console.log(js);
    console.log(toBinary(eval(js), 32));
}

function toBinary(n: bigint, padding = 0): string {
    return n.toString(2).replace("-", "").padStart(padding, "0");
}
