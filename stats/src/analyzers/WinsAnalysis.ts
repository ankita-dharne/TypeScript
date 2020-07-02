import{Analyzer} from '../Summary';
import { MatchData} from '../MatchData';
import {MatchResult} from '../MatchResult';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string){}

    run(matches:MatchData[]): string {
        let Wins = 0;

        for(let match of matches){
        if(match[3] === 'Man Utd' && match[5] === MatchResult.HomeWin){
            Wins++;  
        } else if (match[4] === 'Man Utd' && match[5] === MatchResult.AwayWin){
            Wins++;
        }
        }
        return `Team ${this.team} won ${Wins} games`;
    }
}