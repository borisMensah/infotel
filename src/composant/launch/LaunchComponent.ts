import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchService } from "src/infrastructure/services/launch.service";
import { map } from "rxjs/operators";
import { LaunchDetailed } from "src/infrastructure/dto/launch-detailed";
import { LaunchDetail } from "src/models/launchDetails";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.component.html",
  styleUrls: ["./launch.component.css"],
})
export class LaunchComponent implements OnInit {
  private id: string = "";

  launcheDetail: LaunchDetail = {} as LaunchDetail;

  constructor(
    private route: ActivatedRoute,
    private launchservive: LaunchService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.launchservive
        .launchUpcomingRetrieve({ id: this.id })
        .pipe(
          map((data: LaunchDetailed) => {
            const mappedLaunchDetail: LaunchDetail = {
              id: data.id,
              last_updated: data?.last_updated || "",
              name_agency: data?.launch_service_provider?.name,
              spacecraft_name: data.rocket?.configuration?.name,
              status_launch: data?.status?.name || "",
              destination_spacecraft:
                data.rocket?.spacecraft_stage?.destination || "",
            };
            return mappedLaunchDetail;
          })
        )
        .subscribe((next) => {
          this.launcheDetail = next;
        });
    });
  }
}
