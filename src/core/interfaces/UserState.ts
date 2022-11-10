export default interface UserState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}
