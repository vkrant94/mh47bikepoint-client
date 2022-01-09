import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";
import { ChartistModule } from "ng-chartist";
import { SalesOverviewGrapComponent } from "./dashboard-components/sales-overview-grap/sales-overview-grap.component";
import { VisiterGraphComponent } from "./dashboard-components/visiter-graph/visiter-graph.component";
import { StickerComponent } from "./dashboard-components/sticker/sticker.component";
import { ContactsComponent } from "./dashboard-components/contacts/contacts.component";
import { ActivityComponent } from "./dashboard-components/activity/activity.component";
import { ChartModule } from "primeng/chart";
import { TableModule } from "primeng/table";
import { MhSelectComponent } from "../common/mh-select/mh-select.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartModule,
    TableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [
    DashboardComponent,
    SalesOverviewGrapComponent,
    VisiterGraphComponent,
    StickerComponent,
    ContactsComponent,
    ActivityComponent,
  ],
})
export class DashboardModule {}
