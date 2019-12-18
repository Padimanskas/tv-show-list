import {Injectable} from '@angular/core';
import {IShowResponse} from '@shared/interfaces/show.interface';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private showsResponse: IShowResponse = {
    payload: {
      content: JSON.parse('[\n' +
        '  {\n' +
        '    "id": 0,\n' +
        '    "name": "Hines",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 1,\n' +
        '    "name": "Gonzales",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "harror",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 2,\n' +
        '    "name": "Pearson",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 3,\n' +
        '    "name": "Cook",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 4,\n' +
        '    "name": "Coffey",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 5,\n' +
        '    "name": "Garrison",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 6,\n' +
        '    "name": "Abbott",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 7,\n' +
        '    "name": "Kelly",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "crime",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 8,\n' +
        '    "name": "Holland",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 9,\n' +
        '    "name": "Shepherd",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Tue Mar 23 2004 18:19:34"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 10,\n' +
        '    "name": "Pratt",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 11,\n' +
        '    "name": "Woods",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "crime",\n' +
        '    "season": 1,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 12,\n' +
        '    "name": "Whitfield",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "drama",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 13,\n' +
        '    "name": "Lawson",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 14,\n' +
        '    "name": "Carroll",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 15,\n' +
        '    "name": "Diaz",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 16,\n' +
        '    "name": "Ford",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 17,\n' +
        '    "name": "Sears",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "harror",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 18,\n' +
        '    "name": "Contreras",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "harror",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 19,\n' +
        '    "name": "Serrano",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 20,\n' +
        '    "name": "Walter",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 21,\n' +
        '    "name": "Parrish",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 22,\n' +
        '    "name": "Marsh",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 23,\n' +
        '    "name": "Moss",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "drama",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 24,\n' +
        '    "name": "Bryant",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "harror",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 25,\n' +
        '    "name": "Waller",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "crime",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 26,\n' +
        '    "name": "Anthony",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 27,\n' +
        '    "name": "Best",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 28,\n' +
        '    "name": "Kinney",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 29,\n' +
        '    "name": "Hodge",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "drama",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 30,\n' +
        '    "name": "Ayala",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 31,\n' +
        '    "name": "Hays",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 32,\n' +
        '    "name": "Hutchinson",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 33,\n' +
        '    "name": "Neal",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 34,\n' +
        '    "name": "Bass",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Tue Mar 23 2004 18:19:34"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 35,\n' +
        '    "name": "Hendricks",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 36,\n' +
        '    "name": "Potter",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 37,\n' +
        '    "name": "Crawford",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Tue Mar 23 2004 18:19:34"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 38,\n' +
        '    "name": "Shepard",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 39,\n' +
        '    "name": "Chapman",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 40,\n' +
        '    "name": "Smith",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 41,\n' +
        '    "name": "Perry",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 1,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 42,\n' +
        '    "name": "Odom",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "harror",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 43,\n' +
        '    "name": "Pickett",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "harror",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 44,\n' +
        '    "name": "Rasmussen",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 1,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 45,\n' +
        '    "name": "Lester",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "harror",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 46,\n' +
        '    "name": "Brewer",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 47,\n' +
        '    "name": "Jarvis",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 48,\n' +
        '    "name": "Benton",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "harror",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 49,\n' +
        '    "name": "Kerr",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 1,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 50,\n' +
        '    "name": "Buckner",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 1,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 51,\n' +
        '    "name": "Rosario",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 52,\n' +
        '    "name": "Stanton",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "drama",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 53,\n' +
        '    "name": "Ferrell",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 54,\n' +
        '    "name": "Daniels",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "drama",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 55,\n' +
        '    "name": "Goodman",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 56,\n' +
        '    "name": "Bolton",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 57,\n' +
        '    "name": "Mcgee",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 58,\n' +
        '    "name": "Lucas",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 59,\n' +
        '    "name": "Cortez",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 60,\n' +
        '    "name": "Norman",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 61,\n' +
        '    "name": "Jordan",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 62,\n' +
        '    "name": "Battle",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 63,\n' +
        '    "name": "Bush",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 64,\n' +
        '    "name": "Dejesus",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "harror",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 65,\n' +
        '    "name": "Oneil",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 66,\n' +
        '    "name": "Riddle",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "drama",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 67,\n' +
        '    "name": "Schneider",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "crime",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 68,\n' +
        '    "name": "Porter",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 69,\n' +
        '    "name": "Jackson",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 70,\n' +
        '    "name": "Turner",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "drama",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 71,\n' +
        '    "name": "Wright",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 72,\n' +
        '    "name": "Craft",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 73,\n' +
        '    "name": "Garza",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Tue Mar 23 2004 18:19:34"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 74,\n' +
        '    "name": "Haley",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "harror",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 75,\n' +
        '    "name": "Rutledge",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "crime",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 76,\n' +
        '    "name": "Curry",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "drama",\n' +
        '    "season": 2,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 77,\n' +
        '    "name": "Gamble",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "dark comedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 78,\n' +
        '    "name": "Hunt",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 8,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 79,\n' +
        '    "name": "Huffman",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "crime",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 80,\n' +
        '    "name": "Wooten",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "crime",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 81,\n' +
        '    "name": "Brady",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 82,\n' +
        '    "name": "Hernandez",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 83,\n' +
        '    "name": "Mathis",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "crime",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Sat Sep 18 1993 09:25:58"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 84,\n' +
        '    "name": "Sanchez",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "drama",\n' +
        '    "season": 0,\n' +
        '    "premiereDate": "Thu May 02 1996 04:25:10"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 85,\n' +
        '    "name": "Flowers",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Tue Oct 18 2016 00:22:50 "\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 86,\n' +
        '    "name": "Molina",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 5,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 87,\n' +
        '    "name": "Bright",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 88,\n' +
        '    "name": "Conner",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 89,\n' +
        '    "name": "Rivera",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "drama",\n' +
        '    "season": 10,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 90,\n' +
        '    "name": "Cannon",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "crime",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 91,\n' +
        '    "name": "Bishop",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "harror",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Sat May 12 2001 02:58:12"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 92,\n' +
        '    "name": "Green",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 4,\n' +
        '    "premiereDate": "Tue Feb 17 2009 02:41:02"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 93,\n' +
        '    "name": "Wiggins",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Tue Mar 23 2004 18:19:34"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 94,\n' +
        '    "name": "Mcclure",\n' +
        '    "network": "Netflix",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 3,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 95,\n' +
        '    "name": "Owens",\n' +
        '    "network": "IVI",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 6,\n' +
        '    "premiereDate": "Wed Aug 01 2001 05:06:48"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 96,\n' +
        '    "name": "Sutton",\n' +
        '    "network": "AMC",\n' +
        '    "genre": "drama",\n' +
        '    "season": 7,\n' +
        '    "premiereDate": "Thu Dec 13 2007"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 97,\n' +
        '    "name": "May",\n' +
        '    "network": "MeGoGO",\n' +
        '    "genre": "tragedy",\n' +
        '    "season": 9,\n' +
        '    "premiereDate": "Mon Jan 31 1983 01:07:22"\n' +
        '  }\n' +
        ']')
    },
    errorCode: '',
    message: '',
    statusCode: 200,
    status: 'OK'
  };

  public getShows(): Observable<IShowResponse> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.showsResponse);
        // observer.error(new Error('500'));
        observer.complete();
      }, 1000);
    });
  }

}
