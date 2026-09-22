import { Injectable, signal, WritableSignal, Signal, computed } from '@angular/core';
import { Item } from './item';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
    private _itens: WritableSignal<Item[]> = signal<Item[]>([]);
    readonly itens: Signal<readonly Item[]> = this._itens.asReadonly();

    readonly total = computed(() =>
        this._itens().reduce((sum, item) => sum + item.produto.preco * item.quantidade, 0)
    );

    adicionarItem(newItem: Item) {
        if (!newItem) return;
        this._itens.update(items => {
            const idx = items.findIndex(i => i.produto.id === newItem.produto.id);
            if (idx > -1) {
                return items.map((it, i) => i === idx ? { ...it, quantidade: it.quantidade + newItem.quantidade } : it);
            }
            return [...items, { ...newItem }];
        });
    }

    aumentarQuantidade(item: Item, amount = 1) {
        if (!item) return;
        this._itens.update(items => items.map(it => it.produto.id === item.produto.id ? { ...it, quantidade: it.quantidade + amount } : it));
    }

    diminuirQuantidade(item: Item, amount = 1) {
        if (!item) return;
        this._itens.update(items =>
            items
                .map(it => it.produto.id === item.produto.id ? { ...it, quantidade: it.quantidade - amount } : it)
                .filter(it => it.quantidade > 0)
        );
    }

    removerItem(item: Item) {
        if (!item) return;
        this._itens.update(items => items.filter(it => it.produto.id !== item.produto.id));
    }

    obterTotal(): number {
        return this.total();
    }
}
