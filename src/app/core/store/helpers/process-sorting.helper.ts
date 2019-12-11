export interface ISortPayload {
  fieldName: string;
  sortDirection: string;
  group: boolean;
}

export function processSorting(sortState = [], sortPayload) {
  const { fieldName, sortDirection, group }: ISortPayload = <ISortPayload>sortPayload;
  const payloadField = [ fieldName, sortDirection ];
  let sortFieldsCopy: string[][] = sortState.slice();
  let sortFieldIndex: number;

  if (group && sortDirection) {
    sortFieldIndex = sortFieldsCopy.findIndex((sortField: string[]) => sortField[ 0 ] === payloadField[ 0 ]);
    sortFieldIndex > -1 ? sortFieldsCopy[ sortFieldIndex ] = payloadField : sortFieldsCopy.push(payloadField);
  } else if (sortDirection) {
    sortFieldsCopy = [ payloadField ];
  } else {
    sortFieldsCopy = [];
  }

  return sortFieldsCopy;

}
