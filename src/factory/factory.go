package main

import "fmt"

type IGun interface {
	getName() string
	setName(name string)
	setPower(power int)
	getPower() int
}

type Gun struct {
	Name  string
	Power int
}

func (g *Gun) getName() string {
	return g.Name
}

func (g *Gun) setName(name string) {
	g.Name = name
}

func (g *Gun) getPower() int {
	return g.Power
}

func (g *Gun) setPower(power int) {
	g.Power = power
}

type AK struct {
	Gun
}

func newAK() IGun {
	return &Gun{
		Name:  "ak 47",
		Power: 100,
	}
}

type M4 struct {
	Gun
}

func newM4() IGun {
	return &Gun{
		Name:  "M4",
		Power: 232,
	}
}

func getGun(t string) IGun {
	if t == "ak" {
		return newAK()
	} else {
		return newM4()
	}

}

func main() {
	ak := getGun("ak")
	m4 := getGun("m4")
	fmt.Println(ak)
	fmt.Println(m4)
}
