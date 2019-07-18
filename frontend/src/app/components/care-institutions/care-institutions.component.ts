import { CareInstitutionService } from './../../services/care-institution/care-institution.service';
import { Component, OnInit } from "@angular/core";
import { CareInstitutions } from "src/app/models/care-institutions/care-institutions.interface.model";

@Component({
  selector: "app-care-institutions",
  templateUrl: "./care-institutions.component.html",
  styleUrls: ["./care-institutions.component.scss"]
})
export class CareInstitutionsComponent implements OnInit {
  public careInstitutions: CareInstitutions;

  constructor(private careInstitutionService: CareInstitutionService) {}

  ngOnInit() {
    this.careInstitutionService
      .getCareInstitutions()
      .subscribe(data => (this.careInstitutions = data));
  }
}
