import { OnChanges, SimpleChange, EventEmitter } from '@angular/core';
export declare class PasswordStrengthBarComponent implements OnChanges {
    passwordToCheck: string;
    barLabel: string;
    barColors: Array<string>;
    baseColor: string;
    strengthLabels: Array<string>;
    onStrengthChanged: EventEmitter<number>;
    bar0: string;
    bar1: string;
    bar2: string;
    bar3: string;
    bar4: string;
    strengthLabel: string;
    private colors;
    strengths: Array<string>;
    private defaultColors;
    private defaultBaseColor;
    constructor();
    private checkBarColors();
    private static measureStrength(p);
    private getColor(s);
    getStrengthIndexAndColor(password: string): {
        idx: number;
        col: string;
    };
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    private setBarColors(count, col);
    private setStrengthLabel(index);
}
