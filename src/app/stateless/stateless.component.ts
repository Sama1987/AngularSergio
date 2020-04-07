import { ChangeDetection} from '@angular/cli/lib/config/schema';
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit {

  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();
  @Input () product: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = "Matricularse";
  }

  matricularse() {
    this.disable = true;
    this.matricula = '!Gracias!';
    this.cursomatriculado.emit(this.product);
    this.matricula = '!Gracias!';
  }

  isdisable(){
    return this.disable;
  }
}
