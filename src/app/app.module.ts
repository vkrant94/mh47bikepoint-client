import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FullComponent } from "./layouts/full/full.component";
import { AppHeaderComponent } from "./layouts/full/header/header.component";
import { AppSidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./demo-material-module";

import { SharedModule } from "./shared/shared.module";
import { SpinnerComponent } from "./shared/spinner.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { CreateTransactionComponent } from "./transactions/create-transaction/create-transaction.component";
import { TowingvansComponent } from "./towingvans/towingvans.component";
import { CreateTowingvanComponent } from "./towingvans/create-towingvan/create-towingvan.component";
import { CustomersComponent } from "./customers/customers.component";
import { CreateCustomerComponent } from "./customers/create-customer/create-customer.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { StoresComponent } from "./stores/stores.component";
import { CreateStoreComponent } from "./stores/create-store/create-store.component";
import { GaragesComponent } from "./garages/garages.component";
import { CreateGarageComponent } from "./garages/create-garage/create-garage.component";
import { StaffsComponent } from "./staffs/staffs.component";
import { CreateStaffComponent } from "./staffs/create-staff/create-staff.component";
import { ProductsComponent } from "./products/products.component";
import { CreateProductComponent } from "./products/create-product/create-product.component";
import { StakeholdersComponent } from "./stakeholders/stakeholders.component";
import { CreateStakeholderComponent } from "./stakeholders/create-stakeholder/create-stakeholder.component";
import { MhSelectComponent } from "./common/mh-select/mh-select.component";
import { MatSelectModule } from "@angular/material/select";
import { MhInputComponent } from "./common/mh-input/mh-input.component";
import { ImageCropperModule } from "ngx-image-cropper";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    TransactionsComponent,
    CreateTransactionComponent,
    TowingvansComponent,
    CreateTowingvanComponent,
    CustomersComponent,
    CreateCustomerComponent,
    StoresComponent,
    CreateStoreComponent,
    GaragesComponent,
    CreateGarageComponent,
    StaffsComponent,
    CreateStaffComponent,
    ProductsComponent,
    CreateProductComponent,
    StakeholdersComponent,
    CreateStakeholderComponent,
    MhSelectComponent,
    MhInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    ImageCropperModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
