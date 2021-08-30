// SEE app.module.ts imports

import { Component, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import { ElementRef, Renderer2 } from '@angular/core';

// https://github.com/codemirror/CodeMirror/tree/master/mode/clike
import 'codemirror/mode/julia/julia';

@Component({
  selector: 'app-cm',
  templateUrl: `codemirror.component.html`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class CodeMirrorComponent implements AfterViewInit {
  @Input() name: string;

  onThemeSelect(theme_name) {
    this.config.theme = theme_name;
  }

  onFocus() {}
  onBlur() {}
  constructor(private editor: Renderer2) {
    // CodeMirror.commands.autocomplete = function(cm)
    // {
    //   cm.showHint({hint: CodeMirror.hint.anyword});
    // }
    // eclipse
  }

  @ViewChild('editor') editorElement: ElementRef;
  ngAfterViewInit() {
    console.log(this.editor);
    console.log(this.editorElement.nativeElement);
  }

  // comp = [
  //   ["here", "hither"],
  //   ["asynchronous", "nonsynchronous"],
  //   ["completion", "achievement", "conclusion", "culmination", "expirations"],
  //   ["hinting", "advive", "broach", "imply"],
  //   ["function","action"],
  //   ["provide", "add", "bring", "give"],
  //   ["synonyms", "equivalents"],
  //   ["words", "token"],
  //   ["each", "every"],
  // ];
  // synonyms(cm, option) {
  //   return new Promise(function(accept) {
  //     setTimeout(function() {
  //       var cursor = cm.getCursor(), line = cm.getLine(cursor.line)
  //       var start = cursor.ch, end = cursor.ch
  //       while (start && /\w/.test(line.charAt(start - 1))) --start
  //       while (end < line.length && /\w/.test(line.charAt(end))) ++end
  //       var word = line.slice(start, end).toLowerCase()
  //       for (var i = 0; i < this.comp.length; i++) if (this.comp[i].indexOf(word) != -1)
  //         return accept({list: this.comp[i],
  //                        from: CodeMirror.Pos(cursor.line, start),
  //                        to: CodeMirror.Pos(cursor.line, end)})
  //       return accept(null)
  //     }, 100)
  //   })
  // }

  // https://codemirror.net/doc/manual.html#config
  config = {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'eclipse',

    // AUTOCOMPLATE
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    // hintOptions: {hint: this.synonyms},

    // https://codemirror.net/mode/clike/index.html
    mime: 'text/x-julia',
    mode: 'julia'
  };

  themes = [
    '3024-day',
    '3024-night',
    'abcdef',
    'ambiance-mobile',
    'ambiance',
    'base16-dark',
    'base16-light',
    'bespin',
    'blackboard',
    'cobalt',
    'colorforth',
    'darcula',
    'dracula',
    'duotone-dark',
    'duotone-light',
    'eclipse',
    'elegant',
    'erlang-dark',
    'gruvbox-dark',
    'hopscotch',
    'icecoder',
    'idea',
    'isotope',
    'lesser-dark',
    'liquibyte',
    'lucario',
    'material',
    'mbo',
    'mdn-like',
    'midnight',
    'monokai',
    'neat',
    'neo',
    'night',
    'oceanic-next',
    'panda-syntax',
    'paraiso-dark',
    'paraiso-light',
    'pastel-on-dark',
    'railscasts',
    'rubyblue',
    'seti',
    'shadowfox',
    'solarized',
    'ssms',
    'the-matrix',
    'tomorrow-night-bright',
    'tomorrow-night-eighties',
    'ttcn',
    'twilight',
    'vibrant-ink',
    'xq-dark',
    'xq-light',
    'yeti',
    'zenburn'
  ];

  code = `function Hola()
            println("Decir hola");
end; `;
}

/* DATA FETCHED FROM : https://codemirror.net/theme/

var themes = [];
$('a').each( (i,el) => 
{
	// console.log( $(el).attr('href') == $(el).text() );
	themes.push( $(el).text().split('.')[0] ) ;
});
themes.shift();// remove parent directory link
// JSON.stringify( themes );
console.log( themes );
//
// 
//
VM958:12 (55) ["3024-day", "3024-night", "abcdef", "ambiance-mobile", "ambiance", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "darcula", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "lesser-dark", "liquibyte", "lucario", "material", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "ssms", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "zenburn"]

 */
