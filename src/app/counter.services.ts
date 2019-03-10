export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    callActiveToInactiveCount() {
        this.activeToInactiveCount ++;
        console.log('Active to inactive count: ' + this.activeToInactiveCount);
    }

    callInactiveToActiveCount() {
        this.inactiveToActiveCount ++;
        console.log('Inactive to active count: ' + this.inactiveToActiveCount);
    }
} 