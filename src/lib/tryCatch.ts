


export const Func = async <T, E = Error>(
    fn: () => Promise<T>
): Promise<[T | null, E | null]> => {
    try {
        const result = await fn();
        return [result, null];
    } catch (err) {
        return [null, err as E];
    }
};


export const tryQuery = async <T, E = Error>(
    fn: () => Promise<T>
): Promise<T | E> => {
    try {
        const [result, error] = await Func(fn);
        if (!result || error) throw error;
        return result;
    } catch (err) {
        return err as E;
    }
};


export const trCache = async <T, E = Error>(
    fn: () => Promise<T>
): Promise<[T | null, E | null]> => {
    try {
        const result = await fn();
        return [result, null]
    } catch (err) {
        return [null, err as E];
    }
};