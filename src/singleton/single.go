package singleton

import "sync"

type singleton map[string]string

var (
	instance singleton
)

var lock = &sync.Mutex{}

func NewClass() singleton {
	lock.Lock()
	defer lock.Unlock()
	if instance == nil {
		instance = make(singleton)
	}
	return instance
}

var once sync.Once

func NewClass2() singleton {
	once.Do(func() {
		instance = make(singleton)
	})
	return instance
}
