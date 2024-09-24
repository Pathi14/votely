import { User } from 'src/app/shared/models/user.model';

export interface RegisterData extends Omit<User, 'id'> {
  password: string;
}
