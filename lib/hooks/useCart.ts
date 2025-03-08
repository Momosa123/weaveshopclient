import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === item.id)

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            total: get().total + item.price,
          })
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
            total: get().total + item.price,
          })
        }
      },
      removeItem: (id) => {
        const items = get().items
        const item = items.find((i) => i.id === id)
        if (!item) return

        set({
          items: items.filter((i) => i.id !== id),
          total: get().total - item.price * item.quantity,
        })
      },
      updateQuantity: (id, quantity) => {
        const items = get().items
        const item = items.find((i) => i.id === id)
        if (!item) return

        const quantityDiff = quantity - item.quantity
        set({
          items: items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
          total: get().total + item.price * quantityDiff,
        })
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
) 