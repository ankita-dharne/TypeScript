import { MatchReader  } from './MatchReader';
import {HtmlReport} from './reportTarget/HtmlReport';
import {CsvFileReader} from './CsvFileReader';
import{ConsoleReport} from './reportTarget/ConsoleReport';
import{WinsAnalysis} from './analyzers/WinsAnalysis';
import {Summary} from './Summary'


const matchReader = MatchReader.fromCsv('football.csv'); 
const summary = Summary.winsAnalysisWithHtmlReports('Man Utd'); 
matchReader.load();

summary.buildAndPrintReport(matchReader.matches); 