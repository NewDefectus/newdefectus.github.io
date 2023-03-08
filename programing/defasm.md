---
layout: creation
title: DefAssembler
categories: programming
---

[DefAssembler](https://github.com/NewDefectus/defAsm) is an assembler (an Assembly compiler) for the x86-64 instruction set that is made to run in real-time on browsers. For this purpose it is written in JavaScript, and it's designed to integrate incremental changes to the source code efficiently.

I started working on DefAssembler in early 2021. The original motivation, and the main reason it's used today, is to aid code-golfing in Assembly. More specifically, it was written to allow [code.golf](https://code.golf/) to add Assembly as a language. It took around 3 months (between February and May) to develop the assembler to the point where it could be run on the site, and I've been maintaining the project since then.

Here's a demo of the assembler, integrated into the CodeMirror editor (full page [here](https://newdefectus.github.io/defAsm/)):

<div class="defasm-editor" style="height: 20em">SYS_WRITE = 1
SYS_EXIT = 60
STDOUT_FILENO = 1

# Printing
.data
buffer: .string "Hello, world!\n"
bufferLen = . - buffer

.text
mov $SYS_WRITE, %eax
mov $STDOUT_FILENO, %edi
mov $buffer, %esi
mov $bufferLen, %edx
syscall

# Looping
.data
digit: .byte '0', '\n'

.text
mov $10, %bl
numberLoop:
    mov $SYS_WRITE, %eax
    mov $STDOUT_FILENO, %edi
    mov $digit, %esi
    mov $2, %edx
    syscall

    incb (%rsi)
    dec %bl
    jnz numberLoop

# Accessing arguments
pop %rbx
pop %rax

argLoop:
    dec %ebx
    jz endArgLoop

    pop %rsi
    mov %rsi, %rdi

    mov $-1, %ecx
    xor %al, %al
    repnz scasb

    not %ecx
    movb $'\n', -1(%rsi, %rcx)

    mov %ecx, %edx
    mov $SYS_WRITE, %eax
    mov $STDOUT_FILENO, %edi
    syscall

    jmp argLoop
endArgLoop:

mov $SYS_EXIT, %eax
mov $0, %edi
syscall</div>

The binary output of each assembled line is displayed on its right; notice that if you change any line, its output (and sometimes the outputs of other lines) will change too.

An important aspect of the assembler is how it incorporates incremental changes. For example, when you change a line in the source code, only that line will be parsed and compiled, rather than the entire document. Other instructions will only be changed to adjust instruction offsets (internally this process is called "recompilation," although it doesn't include re-parsing the source code of the instructions).

To see this in action, you can press F3 in the CodeMirror editor to enable debug mode. In this mode each instruction is highlighted, and when a change is made, the portion of the source code that is re-parsed is highlighted. The rest of the code isn't read for this change.

DefAssembler, similar to the GNU Assembler (gas), supports both AT&T and Intel syntaxes (syntices?). By default the AT&T syntax is chosen, however both syntaxes are supported simultaneously and can be switched back and forth (even in the middle of the code!) at will using the `.att_syntax` and `.intel_syntax` directives, as seen here:

<div class="defasm-editor" style="height: 13em">.intel_syntax
add eax, 20
push rbx
mov [325], al
xor esi, [rbx + rax * 4]

.att_syntax
add $20, %eax
push %rbx
mov %al, 325
xor (%rbx, %rax, 4), %esi</div>

## Instruction listings

Another aspect of the assembler I'm pretty proud of is the compressed instruction set. One of the original solutions for DefAssembler's purpose was [ass-js](https://www.npmjs.com/package/ass-js), another x86-64 assembler for JavaScript. However, one thing I didn't like about it was that it kept a [complete JSON file for each mnemonic](https://github.com/streamich/ass-js/tree/master/mnemonics/x64) (instruction name), which I found a bit wasteful.

For DefAssembler, I came up with a much more concise and tightly-packed format for instructions, which looks something like this (this is a modified excerpt from the [`core/mnemonicList.js`](https://github.com/NewDefectus/defAsm/blob/master/core/mnemonicList.js) file in the DefAssembler source code):

> ```
> add
> 04 i R_0bw
> 83.0 Ib rwlq
> 05 iL R_0l
> 80.0 i rbwl
> 05 iL R_0q
> 81.0 IL rq
> 00 Rbwlq r
> 02 r Rbwlq
> 
> mov
> 88 Rbwlq r
> 8A r Rbwlq
> C7.0 Il Rq
> C7.0 iL mq
> B0+8.o i Rbwlq
> C6.0 i rbwl
> 
> jmp
> EB-2 jbl
> FF.4 rQ
> FF.5 mf
> 
> inc:FE.0 rbwlq
> dec:FE.1 rbwlq
> ```

Each instruction listing consists of a line or list of lines, with each line encoding a different variation of the instruction. Each variation is used under different circumstances, typically depending on the list of operands supplied to the instruction.

For example, the `add` instruction has 8 variations:

* The first one, `04 i R_0bw`, is chosen if the instruction is supplied an immediate operand (`i`) followed by either an `al` or `ax` register (`R_0bw`: `R` means register type, `_0` means it must be a register of id 0 (`al`/`ax`/`eax`/`rax`), and `bw` means it can either be byte- or word-sized). When this variation is chosen, the opcode used for the encoding of this instruction is `04`. For example:
> <div class='defasm-editor'>add $32, %al</div>

* The second one, `83.0 Ib rwlq`, is chosen if the first operand is a byte-sized immediate (`Ib` (the capital I means the immediate is treated as signed)) and the second operand is a register or memory operand (`r`) of size word, long or quad (`wlq`). When this variation is chosen, the encoded opcode will be `83`, with an extension field of `0`. For example:
> <div class='defasm-editor'>add $60, %ebx</div>

And so on! Note that technically an instruction like `add $40, %ax` fits both the first and second variations, however the variations are checked for each instruction in top-to-bottom order, so the first variation will "catch" the instruction before the second.

For increased efficiency and memory, each instruction listing is only decoded when the instruction's name is parsed for the first time by the assembler; until then it's simply stored as a string.

<script src="https://newdefectus.github.io/defAsm/make_editor_out.js"></script>