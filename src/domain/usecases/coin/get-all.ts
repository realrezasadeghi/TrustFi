import CoinRepository from '@/domain/repositories/coin';

class GetAllCoins {
  constructor(private repository: CoinRepository) {}

  execute() {}
}

export default GetAllCoins;
