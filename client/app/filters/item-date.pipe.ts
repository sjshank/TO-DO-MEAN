import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'dateFilter'
})
export class ItemDateFilter implements PipeTransform{
    transform(val: any): string {
        let d = new Date(val);
        return d.toDateString();
    }
}