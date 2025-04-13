import { MatchResult } from './enums';

export interface Team {
  id: number;
  name: string;
  founded: string;
  stadium: string;
  coach: string;
  keyPlayers: string[];
  position: number;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  recentForm: MatchResult[];
}

export interface Match {
  id: number;
  date: string;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
}

export interface FormattedMatch {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  result: MatchResult;
  isHome: boolean;
} 