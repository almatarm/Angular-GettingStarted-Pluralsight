import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'spacePipe'
})
export class SpacePipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}