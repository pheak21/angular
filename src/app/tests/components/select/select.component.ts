import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent implements OnInit {

  ngOnInit(): void {}

  // items: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  // itemControl = new FormControl();
  // filteredItems: Observable<string[]>;
  // selectedItems: string[] = [];

  // constructor() {
  //   this.filteredItems = this.itemControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  //   console.log(this.filteredItems)
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.items.filter(item => item.toLowerCase().includes(filterValue));
  // }

  // toggleSelection(item: string): void {
  //   console.log(item)
  //   const index = this.selectedItems.indexOf(item);
  //   if (index >= 0) {
  //     this.selectedItems.splice(index, 1);
  //   } else {
  //     this.selectedItems.push(item);
  //   }
  //   console.log(this.selectedItems)
  // }

  // isSelected(item: string): boolean {
  //   return this.selectedItems.includes(item);
  // }


  optionCtrl = new FormControl();
  options: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  filteredOptions: Observable<string[]>;

  selectedOptions: string[] = [];

  constructor() {
    this.filteredOptions = this.optionCtrl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  displayFn(value: string): string {
    return value ? value : "";
  }

  selected(event: any): void {
    this.selectedOptions.push(event.option.viewValue);
    
    // this.optionCtrl.setValue("");
  }

  removeOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
