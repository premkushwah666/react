export function saveToLocal(task) {
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(task))
}

export function getFromLocal() {
    const rawData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!rawData) return []
    return JSON.parse(rawData)
}

export const LOCAL_STORAGE_KEY = 'prem-todo-app'