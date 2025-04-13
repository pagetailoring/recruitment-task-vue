declare module '#imports' {
  interface PiniaCustomProperties {
    useTeamsStore: typeof import('~/stores/teams').useTeamsStore;
  }
}
