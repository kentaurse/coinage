export function divideDataIntoSubArrays<T>(data: T[], size = 50) {
    let currentIndex = 0;

    return data.reduce((acc: T[][], cur: T, index) => {
        if (!acc[currentIndex]) acc.push([]);
        acc[currentIndex].push(cur);

        if ((index + 1) % size === 0) currentIndex += 1;
        return acc;
    }, []);
}
