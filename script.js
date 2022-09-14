const shiftMap = {
    backquote: {
        eng: "~",
        rus: "Ё"
    },
    digit1: {
        eng: '!',
        rus: '!',
    },
    digit2: {
        eng: '@',
        rus: '"',
    },
    digit3: {
        eng: '#',
        rus: '№',
    },
    digit4: {
        eng: '$',
        rus: ';',
    },
    digit5: {
        eng: '%',
        rus: '%',
    },
    digit6: {
        eng: '^',
        rus: ':',
    },
    digit7: {
        eng: '&',
        rus: '?',
    },
    digit8: {
        eng: '*',
        rus: '*',
    },
    digit9: {
        eng: '(',
        rus: '(',
    },
    digit0: {
        eng: ')',
        rus: ')',
    },
    minus: {
        eng: '_',
        rus: '_',
    },
    equal: {
        eng: '+',
        rus: '+',
    },
    backspace: {
        eng: "Backspace",
        rus: "Backspace",
    },
    tab: {
        eng: "Tab",
        rus: "Tab",
    },
    keyQ: {
        eng: "Q",
        rus: "Й"
    },
    keyW: {
        eng: "W",
        rus: "Ц"
    },
    keyE: {
        eng: "E",
        rus: "У"
    },
    keyR: {
        eng: "R",
        rus: "К",
    },
    keyT: {
        eng: "T",
        rus: "Е",
    },
    keyY: {
        eng: "Y",
        rus: "Н",
    },
    keyU: {
        eng: "U",
        rus: "Г",
    },
    keyI: {
        eng: "I",
        rus: "Ш",
    },
    keyO: {
        eng: "O",
        rus: "Щ",
    },
    keyP: {
        eng: "P",
        rus: "З",
    },
    bracketLeft: {
        eng: "{",
        rus: "Х",
    },
    bracketRight: {
        eng: "}",
        rus: "Ъ",
    },
    backslash: {
        eng: "|",
        rus: "/",
    },
    delete: {
        eng: "Del",
        rus: "Del",
    },
    capsLock: {
        eng: "Capslock",
        rus: "Capslock",
    },
    keyA: {
        eng: "A",
        rus: "Ф",
    },
    keyS: {
        eng: "S",
        rus: "Ы",
    },
    keyD: {
        eng: "D",
        rus: "В",
    },
    keyF: {
        eng: "F",
        rus: "А",
    },
    keyG: {
        eng: "G",
        rus: "П",
    },
    keyH: {
        eng: "H",
        rus: "Р",
    },
    keyJ: {
        eng: "J",
        rus: "О",
    },
    keyK: {
        eng: "K",
        rus: "Л",
    },
    keyL: {
        eng: "L",
        rus: "Д",
    },
    semicolon: {
        eng: ":",
        rus: "Ж",
    },
    quote: {
        eng: "\"",
        rus: "Э",
    },
    enter: {
        eng: "Enter",
        rus: "Enter",
    },
    shiftLeft: {
        eng: "Shift",
        rus: "Shift",
    },
    keyZ: {
        eng: "Z",
        rus: "Я",
    },
    keyX: {
        eng: "X",
        rus: "Ч",
    },
    keyC: {
        eng: "C",
        rus: "С",
    },
    keyV: {
        eng: "V",
        rus: "М",
    },
    keyB: {
        eng: "B",
        rus: "И",
    },
    keyN: {
        eng: "N",
        rus: "Т",
    },
    keyM: {
        eng: "M",
        rus: "Ь",
    },
    comma: {
        eng: "<",
        rus: "Б",
    },
    period: {
        eng: ">",
        rus: "Ю",
    },
    slash: {
        eng: "?",
        rus: ",",
    },
    arrowUp: {
        eng: "▲",
        rus: "▲",
    },
    shiftRight: {
        eng: "Shift",
        rus: "Shift",
    },
    controlLeft: {
        eng: "Ctrl",
        rus: "Ctrl",
    },
    metaLeft: {
        eng: "Win",
        rus: "Win",
    },
    altLeft: {
        eng: "Alt",
        rus: "Alt",
    },
    space: {
        eng: "Space",
        rus: "Space",
    },
    altRight: {
        eng: "Alt",
        rus: "Alt",
    },
    arrowLeft: {
        eng: "◄",
        rus: "◄",
    },
    arrowDown: {
        eng: "▼",
        rus: "▼",
    },
    arrowRight: {
        eng: "►",
        rus: "►",
    },
    controlRight: {
        eng: "Ctrl",
        rus: "Ctrl",
    },
}


const engMap = {
    backquote: {
        eng: "`",
        rus: "ё",
        dataKey: "Backquote"
    },
    digit1: {
        eng: '1',
        rus: '1',
        dataKey: "Digit1"
    },
    digit2: {
        eng: '2',
        rus: '2',
        dataKey: "Digit2"
    },
    digit3: {
        eng: '3',
        rus: '3',
        dataKey: "Digit3"
    },
    digit4: {
        eng: '4',
        rus: '4',
        dataKey: "Digit4"
    },
    digit5: {
        eng: '5',
        rus: '5',
        dataKey: "Digit5"
    },
    digit6: {
        eng: '6',
        rus: '6',
        dataKey: "Digit6"
    },
    digit7: {
        eng: '7',
        rus: '7',
        dataKey: "Digit7"
    },
    digit8: {
        eng: '8',
        rus: '8',
        dataKey: "Digit8"
    },
    digit9: {
        eng: '8',
        rus: '8',
        dataKey: "Digit8"
    },
    digit9: {
        eng: '9',
        rus: '9',
        dataKey: "Digit9"
    },
    digit0: {
        eng: '0',
        rus: '0',
        dataKey: "Digit0"
    },
    minus: {
        eng: '-',
        rus: '-',
        dataKey: "Minus"
    },
    equal: {
        eng: '=',
        rus: '=',
        dataKey: "Equal"
    },
    backspace: {
        eng: "Backspace",
        rus: "Backspace",
        dataKey: "Backspace"
    },
    tab: {
        eng: "Tab",
        rus: "Tab",
        dataKey: "Tab"
    },
    keyQ: {
        eng: "q",
        rus: "й",
        dataKey: "KeyQ"
    },
    keyW: {
        eng: "w",
        rus: "ц",
        dataKey: "KeyW"
    },
    keyE: {
        eng: "e",
        rus: "у",
        dataKey: "KeyE"
    },
    keyR: {
        eng: "r",
        rus: "к",
        dataKey: "KeyR"
    },
    keyT: {
        eng: "t",
        rus: "е",
        dataKey: "KeyT"
    },
    keyY: {
        eng: "y",
        rus: "н",
        dataKey: "KeyY"
    },
    keyU: {
        eng: "u",
        rus: "г",
        dataKey: "KeyU"
    },
    keyI: {
        eng: "i",
        rus: "ш",
        dataKey: "KeyI"
    },
    keyO: {
        eng: "o",
        rus: "щ",
        dataKey: "KeyO"
    },
    keyP: {
        eng: "p",
        rus: "з",
        dataKey: "KeyP"
    },
    bracketLeft: {
        eng: "[",
        rus: "х",
        dataKey: "BracketLeft"
    },
    bracketRight: {
        eng: "]",
        rus: "ъ",
        dataKey: "BracketRight"
    },
    backslash: {
        eng: "\\",
        rus: "\\",
        dataKey: "Backslash"
    },
    delete: {
        eng: "Del",
        rus: "Del",
        dataKey: "Delete"
    },
    capsLock: {
        eng: "Capslock",
        rus: "Capslock",
        dataKey: "CapsLock"
    },
    keyA: {
        eng: "a",
        rus: "ф",
        dataKey: "KeyA"
    },
    keyS: {
        eng: "s",
        rus: "ы",
        dataKey: "KeyS"
    },
    keyD: {
        eng: "d",
        rus: "в",
        dataKey: "KeyD"
    },
    keyF: {
        eng: "f",
        rus: "а",
        dataKey: "KeyF"
    },
    keyG: {
        eng: "g",
        rus: "п",
        dataKey: "KeyG"
    },
    keyH: {
        eng: "h",
        rus: "р",
        dataKey: "KeyH"
    },
    keyJ: {
        eng: "j",
        rus: "о",
        dataKey: "KeyJ"
    },
    keyK: {
        eng: "k",
        rus: "л",
        dataKey: "KeyK"
    },
    keyL: {
        eng: "l",
        rus: "д",
        dataKey: "KeyL"
    },
    semicolon: {
        eng: ";",
        rus: "ж",
        dataKey: "Semicolon"
    },
    quote: {
        eng: "'",
        rus: "э",
        dataKey: "Quote"
    },
    enter: {
        eng: "Enter",
        rus: "Enter",
        dataKey: "Enter"
    },
    shiftLeft: {
        eng: "Shift",
        rus: "Shift",
        dataKey: "ShiftLeft"
    },
    keyZ: {
        eng: "z",
        rus: "я",
        dataKey: "KeyZ"
    },
    keyX: {
        eng: "x",
        rus: "ч",
        dataKey: "KeyX"
    },
    keyC: {
        eng: "c",
        rus: "с",
        dataKey: "KeyC"
    },
    keyV: {
        eng: "v",
        rus: "м",
        dataKey: "KeyV"
    },
    keyB: {
        eng: "b",
        rus: "и",
        dataKey: "KeyB"
    },
    keyN: {
        eng: "n",
        rus: "т",
        dataKey: "KeyN"
    },
    keyM: {
        eng: "m",
        rus: "ь",
        dataKey: "KeyM"
    },
    comma: {
        eng: ",",
        rus: "б",
        dataKey: 'Comma'
    },
    period: {
        eng: ".",
        rus: "ю",
        dataKey: 'Period'
    },
    slash: {
        eng: "/",
        rus: ".",
        dataKey: "Slash"
    },
    arrowUp: {
        eng: "▲",
        rus: "▲",
        dataKey: "ArrowUp"

    },
    shiftRight: {
        eng: "Shift",
        rus: "Shift",
        dataKey: "ShiftRight"
    },
    controlLeft: {
        eng: "Ctrl",
        rus: "Ctrl",
        dataKey: "ControlLeft"
    },
    metaLeft: {
        eng: "Win",
        rus: "Win",
        dataKey: "MetaLeft"
    },
    altLeft: {
        eng: "Alt",
        rus: "Alt",
        dataKey: "AltLeft"
    },
    space: {
        eng: "Space",
        rus: "Space",
        dataKey: "Space"
    },
    altRight: {
        eng: "Alt",
        rus: "Alt",
        dataKey: "AltRight"
    },
    arrowLeft: {
        eng: "◄",
        rus: "◄",
        dataKey: "ArrowLeft"
    },
    arrowDown: {
        eng: "▼",
        rus: "▼",
        dataKey: "ArrowDown"
    },
    arrowRight: {
        eng: "►",
        rus: "►",
        dataKey: "ArrowRight"
    },
    controlRight: {
        eng: "Ctrl",
        rus: "Ctrl",
        dataKey: "ControlRight"
    },
}


const keybord = {
    properties: {
        local: 'eng',
        value: '',
        capslock: false,
        shift: false,
        mouseDown: false,
        cursorPosition: null,
    },
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
        textarea: null,
        langKeys: null
    },
    init() {
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keys-container');
        this.elements.keysContainer.appendChild(this.createKeys());
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.textarea = document.createElement('textarea');
        this.elements.textarea.classList.add('textarea');
        document.body.append(this.elements.textarea);
        document.body.append(this.elements.main);

        this.properties.cursorPosition = this.elements.textarea.selectionStart = this.elements.textarea.selectionEnd;

        this.elements.keysContainer.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('lang-key')) {
                this.properties.value += target.textContent;
                this.elements.textarea.value = this.properties.value;
                this.elements.textarea.focus();
            }

            if (target && target.classList.contains('key')) {
                target.classList.add('animate');
                target.addEventListener('animationend', () => {
                    target.classList.remove('animate');
                })
            }
        })

        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.key === 'Alt' && e.ctrlKey || e.key === 'Control' && e.altKey) {
                if (this.properties.local === 'eng') {
                    this.properties.local = 'rus';
                } else {
                    this.properties.local = 'eng';
                }
                this.elements.keysContainer.innerHTML = '';
                this.elements.keysContainer.appendChild(this.createKeys());
            }

            this.enterText(e);
        })
    },


    enterText(e) {
        const dataKey = document.querySelector(`[data-key=${e.code}]`);
        dataKey.classList.add('animate');
        dataKey.addEventListener('animationend', () => {
            dataKey.classList.remove('animate');
        })
        if (dataKey.classList.contains('lang-key')) {
            this.properties.value += dataKey.textContent;
        }

        if (dataKey.classList.contains('backspace')) {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
        }

        if (dataKey.classList.contains('del')) {
            this.properties.value = this.properties.value.substring(1, this.properties.value.length);
        }

        if (dataKey.classList.contains('tab')) {
            this.properties.value += '\t';
        }

        if (dataKey.classList.contains('enter')) {
            this.properties.value += '\n';
        }

        if (dataKey.classList.contains('space')) {
            this.properties.value += ' ';
        }

        if (dataKey.classList.contains('capslock')) {
            this.capsLock(dataKey);
        }

        if (dataKey.classList.contains('left-shift')) {
            this.properties.shift = !this.properties.shift;
            this.toggleKeys();
            this.animateShiftButton(dataKey, this.properties.shift);
        }

        if (dataKey.classList.contains('arrow-down')) {
            
        }

        if (dataKey.classList.contains('arrow-left')) {
            this.moveCursorToTheLeft();
        }

        if (dataKey.classList.contains('arrow-right')) {
            this.moveCursorToTheRight();
        }



        this.elements.textarea.value = this.properties.value;
        this.elements.textarea.focus();
    },

    animateShiftButton(key, shiftState) {
        if (shiftState) {
            key.classList.add('shift-on');
        } else {
            key.classList.remove('shift-on');
        }
    },

    moveCursorToTheLeft() {
        this.properties.cursorPosition = this.elements.textarea.selectionStart - 1;
            if (this.elements.textarea.selectionStart === 0) {
                return;
            }
            this.elements.textarea.setSelectionRange(this.properties.cursorPosition, this.properties.cursorPosition, "backward");
    },

    moveCursorToTheRight() {
        this.properties.cursorPosition = this.elements.textarea.selectionStart + 1;
        this.elements.textarea.setSelectionRange(this.properties.cursorPosition, this.properties.cursorPosition, "forward");
    },

    capsLock(keyEl) {
        this.properties.capslock = !this.properties.capslock;
        const keysValues = document.querySelectorAll('.lang-key');

        keysValues.forEach((item) => {
            if (this.properties.capslock) {
                keyEl.classList.add('capslock-on');
                item.textContent = item.textContent.toUpperCase();
            } else {
                keyEl.classList.remove('capslock-on');
                item.textContent = item.textContent.toLowerCase();
            }
        })
    },

    toggleKeys() {
        const keys = document.querySelectorAll('.key');

        for (let key of keys) {
            let attrKey = key.getAttribute('data-key');
            attrKey = attrKey[0].toLowerCase() + attrKey.slice(1);
            console.log(attrKey);
            if (this.properties.shift) {
                key.textContent = shiftMap[attrKey][this.properties.local];
            } else {
                key.textContent = engMap[attrKey][this.properties.local];
            }

        }
    },

    getCurrentLinePosition() {
        let currentPos = this.elements.textarea.selectionStart;
        while(true) {
            let symbol = this.elements.textarea.value[currentPos];
            if(symbol === '\n') {
                currentPos++;
                break;
            }
            
            currentPos--;

            if(currentPos === 0) {
                break;
            }
        }
        return this.elements.textarea.selectionStart - currentPos;
    },
    
    getNextLinePosition() {
        let currentPos = this.elements.textarea.selectionStart;
        while(currentPos < this.elements.textarea.value.length) {
            let symbol = this.elements.textarea.value[currentPos];
            if(symbol === '\n') break;
            currentPos++;
        }
        return currentPos;
    },

    getLineLength(start) {
        let temp = start;
        while(start < this.elements.textarea.value.length) {
            let symbol = this.elements.textarea.value[start];
            if(symbol === '\n') break;
            start++;
        }

        return start - temp;
    },

    getNextLineLength() {
        const pos = this.getNextLinePosition() + 1;
        
        return this.getLineLength(pos);
    },    

    showText() {
        for(let i = 0; i < this.elements.textarea.value.length; i++) {
            console.log(this.elements.textarea.value[i]);
        }
    },


    createKeys() {
        const fragment = document.createDocumentFragment();

        for (let key in engMap) {
            const insertLineBreak = ['backspace', 'del', 'enter', 'shiftRight'].includes(key);

            const keyElement = document.createElement('button');
            keyElement.classList.add('key');
            keyElement.setAttribute('type', 'button');
            keyElement.setAttribute('data-key', engMap[key]["dataKey"]);

            switch (key) {
                case 'arrowRight':
                    keyElement.classList.add('arrow-right');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.moveCursorToTheRight();
                        this.elements.textarea.focus();
                    })
                    break;
                case 'arrowLeft':
                    keyElement.classList.add('arrow-left');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.moveCursorToTheLeft();
                        this.elements.textarea.focus();
                    })
                    break;
                case 'arrowDown':
                    keyElement.classList.add('arrow-down');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.elements.textarea.focus();
                        document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': '40'}));
                        document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': '40'}));
                        
                        // console.log(this.elements.textarea.selectionStart);
                        // const rows = this.elements.textarea.value.split('\n');
                        // let space = null;
                        // for(let i = 0; i < rows.length; i++) {
                        //     if(this.elements.textarea.selectionStart < rows[i].length) {
                        //         space = this.elements.textarea.selectionStart + rows[i].length;
                        //     } 

                        //     if(rows[i] === rows.length - 1) {
                        //         console.log('last');
                        //     }
                        // }
                        // console.log(space);
                        // let lineShift = this.getCurrentLinePosition();
                        // let nextLinePos = this.getNextLinePosition();
                        // console.log(lineShift);
                        // console.log(nextLinePos);
                        // let space = lineShift + nextLinePos + 1;
                        // if(nextLinePos === this.elements.textarea.value.length - 1) {
                        //     space = this.elements.textarea.value.length - 1;
                        // } else {
                        //     let lineLength = this.getNextLineLength();
                        //     console.log(lineLength);
                        //     if(lineLength < lineShift) {
                        //         space = nextLinePos + lineLength + 1;
                        //     }
                        // }
                        
                      
                        // this.elements.textarea.setSelectionRange(space, space);
                        // this.elements.textarea.focus();
                        // this.showText();

                    })
                    break;
                case 'arrowUp':
                    keyElement.classList.add('arrow-up');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        
                    })
                    break;
                case 'backspace':
                    keyElement.classList.add('backspace');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.elements.textarea.value = this.properties.value;
                        this.elements.textarea.focus();
                    })
                    break;
                case 'tab':
                    keyElement.classList.add('tab');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.properties.value += '\t';
                        this.elements.textarea.value = this.properties.value;
                        this.elements.textarea.focus();
                    })
                    break;
                case 'delete':
                    keyElement.classList.add('del');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(1, this.properties.value.length);
                        this.elements.textarea.value = this.properties.value;
                        this.elements.textarea.focus();
                    })
                    break;
                case 'capsLock':
                    keyElement.classList.add('capslock');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.capsLock(keyElement);
                    })
                    break;
                case 'enter':
                    keyElement.classList.add('enter');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.properties.value += '\n';
                        this.elements.textarea.value = this.properties.value;
                        this.elements.textarea.focus();
                    })
                    break;
                case 'shiftLeft':
                    keyElement.classList.add('shift', 'left-shift');
                    keyElement.textContent = engMap[key][this.properties.local];

                    keyElement.addEventListener('mousedown', () => {
                        this.properties.shift = true;
                        this.properties.mouseDown = true;
                        this.toggleKeys();
                    })
                    keyElement.addEventListener('mouseup', () => {
                        this.properties.shift = false;
                        this.properties.mouseDown = false;
                        this.toggleKeys();
                    })

                    keyElement.addEventListener('mouseout', (e) => {
                        this.animateShiftButton(e.target, this.properties.shift);
                    })

                    break;
                case 'shiftRight':
                    keyElement.classList.add('shift', 'right-shift');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                case 'controlLeft':
                    keyElement.classList.add('ctrl', 'left-ctrl');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                case 'controlRight':
                    keyElement.classList.add('ctrl', 'right-ctrl');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                case 'altLeft':
                    keyElement.classList.add('alt', 'left-alt');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                case 'altRight':
                    keyElement.classList.add('alt', 'right-alt');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                case 'space':
                    keyElement.classList.add('space');
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.addEventListener('click', () => {
                        this.properties.value += ' ';
                        this.elements.textarea.value = this.properties.value;
                        this.elements.textarea.focus();
                    })
                    break;
                case 'metaLeft':
                    keyElement.classList.add('win');
                    keyElement.textContent = engMap[key][this.properties.local];
                    break;
                default:
                    keyElement.textContent = engMap[key][this.properties.local];
                    keyElement.classList.add('lang-key');
            }

            fragment.appendChild(keyElement);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        }
        return fragment;

    },

}

keybord.init();