export default function ServerComponent1() {


    const promise:Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('안녕하세요')
        }, 10000)
    })

    return (
        <div>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            {promise}
        </div>
    )

}