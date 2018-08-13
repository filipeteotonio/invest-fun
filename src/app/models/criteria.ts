export class Criteria {

    public attr: string;
    public name: string;
    public max_val: number;
    public min_val: number;

    constructor(attr, name, min, max) {
        this.attr = attr;
        this.name = name;
        this.min_val = min;
        this.max_val = max;
    }

}
