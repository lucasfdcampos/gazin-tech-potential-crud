import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import AppError from '@shared/errors/AppError';

@injectable()
class DeleteDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute(id: string): Promise<number> {
    const developer = await this.developersRepository.findById(id);

    if (!developer) {
      throw new AppError('Developer not found.');
    }

    const results = await this.developersRepository.delete(id);

    return results;
  }
}

export default DeleteDeveloperService;
