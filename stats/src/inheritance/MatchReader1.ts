import { CsvFileReader } from "../CsvFileReader";
import { dateStringToDate} from "../Utils";
import {MatchResult} from "../MatchResult";


type MatchData = [string,Date, string, string, string, MatchResult,number];

export class MatchReader extends CsvFileReader <MatchData>{
    mapRow(row: string []): MatchData{
        return[
            row[0],
            dateStringToDate(row[1]),
            row[2],
            row[3],
            row[4],
            row[5] as MatchResult,
            parseInt(row[6])
        ];
    }
}