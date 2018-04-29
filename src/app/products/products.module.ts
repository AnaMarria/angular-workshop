import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./../shared/shared.module";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CanActivateEditGuard } from './can-activate-edit.guard';
import { ProductsEditResolver } from "./products-edit.resolver";

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, SharedModule, ProductsRoutingModule],
  declarations: [ProductsListComponent, ProductItemComponent, DetailsComponent, EditComponent],
  exports: [ProductsListComponent],
  providers: [ProductsService, CanActivateEditGuard, ProductsEditResolver]
})
export class ProductsModule { }