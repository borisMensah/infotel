import { Component, OnInit } from "@angular/core";
import { LaunchService } from "src/infrastructure/services/launch.service";
import { map } from "rxjs/operators";
import { PaginatedLaunchSerializerCommonList } from "src/infrastructure/dto/paginated-launch-serializer-common-list";
import { LauncherItem } from "src/models/launchItemList";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
})
export class LaunchListComponent implements OnInit {
  launchers: LauncherItem[] = [];

  constructor(private launchservive: LaunchService) {}

  ngOnInit(): void {
    this.launchservive
      .launchUpcomingList({ limit: 50 })
      .pipe(
        map((data: PaginatedLaunchSerializerCommonList) => {
          let mappedLauncherItem: LauncherItem[] = [];
          if (data.results != undefined) {
            data.results.forEach((launchDetails) => {
              const launch: LauncherItem = {
                name: launchDetails?.name || "",
                status: launchDetails?.status?.name || "",
                window_end: launchDetails?.window_end || "",
                window_start: launchDetails?.window_start || "",
                id: launchDetails?.id,
              };
              mappedLauncherItem = mappedLauncherItem.concat(launch);
            });
          }
          return mappedLauncherItem;
        })
      )
      .subscribe((next) => (this.launchers = next));
  }
}
