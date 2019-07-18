import { CareInstitutionService } from './../../services/care-institution/care-institution.service';
import { Component, OnInit } from "@angular/core";
import { CareInstitution } from "../../models/care-institution/care-institution.interface.model";
import { ActivatedRoute } from "@angular/router";
import { CareInstitutionImpl } from 'src/app/models/care-institution/care-institution.model';

@Component({
  selector: "app-care-institution",
  templateUrl: "./care-institution.component.html",
  styleUrls: ["./care-institution.component.scss"]
})
export class CareInstitutionComponent implements OnInit {
  public careInstitution: CareInstitution;
  public errorMessage;

  constructor(
    private careinstitutionService: CareInstitutionService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getCareInstitution();
  }

  getCareInstitution(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    console.log(this.careinstitutionService.getCareInstitution(id));

    this.careinstitutionService.getCareInstitution(id)
      .subscribe(data => this.careInstitution = data,
                 error => this.errorMessage = error);          
  }
}
