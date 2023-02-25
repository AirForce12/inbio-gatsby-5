import { useEffect, useRef, useState } from "react";

function useDynamicIconImport(name, options = {}) {
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { onError } = options;

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = await import(`react-feather`).then(
                    (icon) => icon[name]
                );
                if (!ImportedIconRef.current) {
                    const { default: namedImport } = await import(
                        `../assets/fonts/${name}.svg`
                    );
                    ImportedIconRef.current = namedImport;
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default useDynamicIconImport;
