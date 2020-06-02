import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Program } from 'src/app/models/program/program';
import { ProgramService } from 'src/app/services/program/program.service';
import { BehaviorSubject } from 'rxjs';
import { HttpCollectionResponse, HttpResponseMeta } from 'src/app/core/services/resource/resource.service';
import { StateService } from 'src/app/core/services/state/state.service';
import { fetchAnimation } from 'src/app/animations/animations';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { debounceTime } from 'rxjs/operators';

interface ProgramFilter{
  q: FormControl;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [ fetchAnimation ]
})
export class IndexComponent implements OnInit, OnDestroy {


  source: MatTableDataSource<Program>;
  subject: BehaviorSubject<Program[]>;

  displayedColumns: string[];

  meta: HttpResponseMeta = {
    current_page: 1,
    per_page: 15
  };
  
  filter: ProgramFilter = {
    q: new FormControl('')
  }

  loading: boolean = false;

  constructor(private programService: ProgramService,
              private stateService: StateService,
              private router: Router,
              breakpoint: BreakpointObserver) {

    this.source = new MatTableDataSource([]);
    this.subject = this.source.connect();

    this.displayedColumns = [ 'name', 'code', 'student_count' ];

    breakpoint.observe(Breakpoints.Handset).subscribe( state => {
      this.displayedColumns = state.matches
                                ? [ 'name', 'view']
                                : [ 'name', 'code', 'department', 'no_of_years', 'student_count', 'view' ]
    });
  }

  ngOnInit(): void {

    this.meta = this.stateService.get('programs.meta') ?? this.meta;
    this.filter.q.setValue( this.stateService.get('programs.filter.q') ?? '');
    
    this.fetchPrograms();

    this.filter.q.valueChanges.pipe(
      debounceTime(300)
    ).subscribe( q => {
      this.fetchPrograms();
    });
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
    this.stateService.set('programs.meta', this.meta);
    this.stateService.set('programs.filter.q', this.filter.q.value); 
  }

  fetchPrograms(page: PageEvent = null): void {
    this.loading = true;
    this.programService.queryWithMeta({
      params: {
        page: page ? page.pageIndex + 1 : 1,
        per_page: page ? page.pageSize : 15,
        q: this.filter.q.value
      }
    }).subscribe( (response: HttpCollectionResponse) => {
      this.subject.next(response.data);
      this.meta = response.meta;
      this.loading = false;
    });
  }

  view(program: Program): void {
    this.stateService.set('program', program);
    setTimeout( () => {
      this.router.navigate(['/programs', program.id]);      
    }, 500);
  }

}
